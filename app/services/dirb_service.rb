class DirbService
  SCRIPT = Rails.root.join('lib', 'modules', 'dirb.py').to_s.freeze()

  def initialize(params)
    @root = Shellwords.escape(params[:root])
    @wordlist = Shellwords.escape(params[:wordlist])
  end

  def run
    Rails.logger.info 'Running DirbService...'
    begin
      `python3 #{SCRIPT} #{@root} #{@wordlist}`
    rescue
      ''
    end
  end
end
