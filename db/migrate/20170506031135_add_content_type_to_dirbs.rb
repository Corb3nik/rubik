class AddContentTypeToDirbs < ActiveRecord::Migration[5.1]
  def change
    add_column :dirbs, :content_type, :string
  end
end
