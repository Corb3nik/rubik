class CreateWappalyzers < ActiveRecord::Migration[5.1]
  def change
    create_table :wappalyzers do |t|
      t.string :name
      t.string :website
      t.string :category
      t.integer :confidence
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end
