# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170706213421) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "challenges", force: :cascade do |t|
    t.string "name"
    t.string "root"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ctfs", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dirbs", force: :cascade do |t|
    t.bigint "challenge_id"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "content_type"
    t.index ["challenge_id"], name: "index_dirbs_on_challenge_id"
  end

  create_table "spiders", force: :cascade do |t|
    t.bigint "challenge_id"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "content_type"
    t.index ["challenge_id"], name: "index_spiders_on_challenge_id"
  end

  create_table "wappalyzers", force: :cascade do |t|
    t.string "name"
    t.string "website"
    t.string "category"
    t.integer "confidence"
    t.bigint "challenge_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["challenge_id"], name: "index_wappalyzers_on_challenge_id"
  end

  add_foreign_key "dirbs", "challenges"
  add_foreign_key "spiders", "challenges"
  add_foreign_key "wappalyzers", "challenges"
end
