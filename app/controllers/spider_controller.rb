class SpiderController < ModulesController

  def run
    spider = SpiderService.new({ root: @challenge.root })

    json = JSON.parse spider.run()
    json['links'].each do |link|
      url = link['url']
      content_type = link['content-type']
      @challenge.spiders.find_or_create_by(url: url, 'content_type': content_type)
    end

    render json: json
  end

  def reset
    @challenge.spiders.delete_all
    render json: { status: :success }
  end

  def index
    render json: @challenge.spiders
  end
end
