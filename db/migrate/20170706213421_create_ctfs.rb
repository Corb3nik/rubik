class CreateCTFs < ActiveRecord::Migration[5.1]
  def change
    create_table :ctfs do |t|
      t.string :name

      t.timestamps
    end
  end
end
