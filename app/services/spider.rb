class SpiderService

  SCRIPT = Rails.root.join(:lib, :modules, 'spider.py').to_s.freeze()

  def initialize(params)
    @root = Shellwords.escape(params[:root])
    @output = params[:output]
  end

  def run()
    exec("python #{SCRIPT} #{@root} #{@output}")
  end
end
