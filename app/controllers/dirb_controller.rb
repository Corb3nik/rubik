class DirbController < ModulesController

  DIRB_FILE = Rails.root.join('lib', 'modules', 'dirb.txt').to_s.freeze()

  def run
    dirb = DirbService.new({ root: @project.root, wordlist: DIRB_FILE })

    json = JSON.parse dirb.run()
    json['links'].each do |link|
      @project.dirbs.find_or_create_by(url: link)
    end

    render json: json
  end

  def reset
  end
end
