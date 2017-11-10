class WappalyzerService
  SCRIPT = Rails.root.join('lib', 'modules', 'wappalyzer.py').to_s.freeze()

  def initialize(params)
    @root = Shellwords.escape(params[:root])
  end

  def run
    Rails.logger.info 'Running WappalyzerService...'
    begin
      `python3 #{SCRIPT} #{@root}`
    rescue
      ''
    end
  end
end
