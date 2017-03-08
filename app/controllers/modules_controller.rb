class ModulesController < ApplicationController
  before_action :load_params

  DIRB_FILE = Rails.root.join('lib', 'modules', 'dirb.txt').to_s.freeze()

  def spider
    s = SpiderService.new({ root: @project.root })

    json = JSON.parse s.run()
    json['links'].each do |link|
      @project.spiders.find_or_create_by(url: link)
    end

    render json: json
  end

  def dirb
    s = DirbService.new({ root: @project.root, wordlist: DIRB_FILE })

    json = JSON.parse s.run()
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
