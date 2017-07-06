class UpdateReferencesForChallenge < ActiveRecord::Migration[5.1]
  def change
    rename_column :spiders, :project_id, :challenge_id
    rename_column :dirbs, :project_id, :challenge_id
    rename_column :wappalyzers, :project_id, :challenge_id
  end
end
