class DirbController < ModulesController
  DIRB_FILE = Rails.root.join('lib', 'modules', 'dirb.txt').to_s.freeze

  def run
    @challenge.dirbs.delete_all
    dirb = DirbService.new(root: @challenge.root, wordlist: DIRB_FILE)

    json = JSON.parse dirb.run
    json['links'].each do |link|
      url = link['url']
      content_type = link['content-type']
      @challenge.dirbs.find_or_create_by(url: url, 'content_type': content_type)
    end

    render json: @challenge.dirbs
  end

  def index
    render json: @challenge.dirbs
  end
end
