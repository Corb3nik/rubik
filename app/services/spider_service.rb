class SpiderService

  SCRIPT = Rails.root.join('lib', 'modules', 'spider.py').to_s.freeze()

  def initialize(params)
    @root = Shellwords.escape(params[:root])
    @output = params[:output]
  end

  def run()
    begin
      `python3 #{SCRIPT} #{@root}`
    rescue
      ""
    end
  end
end
