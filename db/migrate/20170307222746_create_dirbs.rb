class CreateDirbs < ActiveRecord::Migration[5.1]
  def change
    create_table :dirbs do |t|
      t.references :project, foreign_key: true
      t.string :url

      t.timestamps
    end
  end
end
