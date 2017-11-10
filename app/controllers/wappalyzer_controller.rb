class WappalyzerController < ModulesController

  def run
    @challenge.wappalyzers.delete_all
    wappalyzer = WappalyzerService.new(root: @challenge.root)

    json = JSON.parse wappalyzer.run
    json['results']['applications'].each do |application|
      name = application['name']
      confidence = application['confidence']
      website = application['website']
      category = application['categories'][0]

      @challenge.wappalyzers.find_or_create_by(
        name: name,
        confidence: confidence,
        website: website,
        category: category
      )
    end

    render json: @challenge.wappalyzers
  end

  def index
    render json: @challenge.wappalyzers
  end
end
