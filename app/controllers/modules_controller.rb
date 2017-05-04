class ModulesController < ApplicationController
  before_action :load_params, except: :index

  DIRB_FILE = Rails.root.join('lib', 'modules', 'dirb.txt').to_s.freeze()

  def index
    available_modules = {
      modules: [
        { name: "Dashboard", slug: "dashboard" },
        { name: "Directory Buster", slug: "dirb" },
        { name: "Spider", slug: "spider" },
      ]
    }
    render json: available_modules
  end

  def dashboard
    render json: {}
  end

  def spider
    spider = SpiderService.new({ root: @project.root })

    json = JSON.parse spider.run()
    json['links'].each do |link|
      @project.spiders.find_or_create_by(url: link)
    end

    render json: json
  end

  def dirb
    dirb = DirbService.new({ root: @project.root, wordlist: DIRB_FILE })

    json = JSON.parse dirb.run()
    json['links'].each do |link|
      @project.dirbs.find_or_create_by(url: link)
    end

    render json: json
  end

  private

  def load_params
    @project = Project.find(params[:project_id])
  end
end
