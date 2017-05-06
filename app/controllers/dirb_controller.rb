class DirbController < ModulesController

  DIRB_FILE = Rails.root.join('lib', 'modules', 'dirb.txt').to_s.freeze()

  def run
    dirb = DirbService.new({ root: @project.root, wordlist: DIRB_FILE })

    json = JSON.parse dirb.run()
    json['links'].each do |link|
      url = link['url']
      content_type = link['content-type']
      @project.dirbs.find_or_create_by(url: url, 'content_type': content_type)
    end

    render json: json
  end

  def reset
    render json: {}
  end

  def index
    render json: {}
  end
end
