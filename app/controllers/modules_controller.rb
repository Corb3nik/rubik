class ModulesController < ApplicationController
  def spider
    s = SpiderService.new({root: @project.root, output: true})
    render json: s.run()
  end

  def dirb
  end

  def load_params
    @project = Project.find(params[:id])
  end
end
