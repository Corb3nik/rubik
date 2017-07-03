class AddContentTypeToSpiders < ActiveRecord::Migration[5.1]
  def change
      add_column :spiders, :content_type, :string
  end
end
