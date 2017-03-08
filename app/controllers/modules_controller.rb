class ModulesController < ApplicationController

  DIRB_FILE = Rails.root.join('lib', 'modules', 'dirb.txt').to_s.freeze()

  def spider
    s = SpiderService.new({ root: @project.root })
    render json: s.run()
  end

  def dirb
    s = DirbService.new({ root: @project.root, wordlist: DIRB_FILE })
    render json: s.run()
  end

  def load_params
    @project = Project.find(params[:id])
  end
end
