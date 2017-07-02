class WappalyzerController < ModulesController

  def run
    dirb = WappalyzerService.new({ root: @project.root })

    json = JSON.parse dirb.run()
    json[:results][:applications].each do |application|
      name = application['name']
      confidence = application['confidence']
      website = application['website']
      category = application['categories'][0]

      @project.wappalyzers.find_or_create_by(name: name,
        confidence: confidence,
        website: website,
        category: category)
    end

    render json: json[:results][:applications]
  end

  def reset
    @project.wappalyzers.delete_all
    render json: { status: :success }
  end

  def index
    render json: @project.wappalyzers
  end
end