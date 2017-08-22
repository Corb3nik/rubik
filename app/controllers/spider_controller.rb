class SpiderController < ModulesController

  def run
    @challenge.spiders.delete_all
    spider = SpiderService.new(root: @challenge.root)

    json = JSON.parse spider.run
    json['links'].each do |link|
      url = link['url']
      content_type = link['content-type']
      @challenge.spiders.find_or_create_by(url: url, 'content_type': content_type)
    end

    render json: @challenge.spiders
  end

  # TODO: is the really necessary if we destroy spiders before run?
  def reset
    @challenge.spiders.delete_all
    render json: { status: :success }
  end

  def index
    render json: @challenge.spiders
  end
end
