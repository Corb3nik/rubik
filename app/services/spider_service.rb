class SpiderService
  SCRIPT = Rails.root.join('lib', 'modules', 'spider.py').to_s.freeze()

  def initialize(params)
    @root = Shellwords.escape(params[:root])
  end

  def run
    Rails.logger.info 'Running SpiderService...'
    begin
      `python3 #{SCRIPT} #{@root}`
    rescue
      ''
    end
  end
end
