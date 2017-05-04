class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :respond_to_html

  private

  def respond_to_html
    respond_to do |format|
      format.html { render template: 'pages/index' }
      format.all
    end
  end
end
