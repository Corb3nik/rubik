class ModulesController < ApplicationController
  before_action :load_params

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

  private

  def load_params
    @project = Project.find(params[:project_id])
  end
end
