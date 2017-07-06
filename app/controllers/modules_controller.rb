class ModulesController < ApplicationController
  before_action :load_params

  def dashboard
    render json: {}
  end

  def spider
    spider = SpiderService.new(root: @challenge.root)

    json = JSON.parse spider.run()
    json['links'].each do |link|
      @challenge.spiders.find_or_create_by(url: link)
    end

    render json: json
  end

  private

  def load_params
    @challenge = Challenge.find(params[:challenge_id])
  end
end
