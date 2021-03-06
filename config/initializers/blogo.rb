Blogo.configure do |config|
  # Edit this to match the subject of your blog
  config.site_title    = 'Suhan'
  config.site_subtitle = 'Personal Blog about anything'

  # Supported languages: :html, :markdown
  config.markup_lang = :html

  config.paginator_size = 3
  config.posts_per_page = 2 #//10
  config.recent_posts =  3

  # Maybe you do not want to use CKEditor, if you use markdown
  config.use_ckeditor = true

  config.show_rss_icon = true

  # Keywords that will be added automatically to every page
  config.keywords = ["blog", "software", "software development"]

  # Do not change this once you installed and ran migrations
  config.table_name_prefix = 'blogo_'

  # Set disqus shortname if you want to your users to have ability to comment
  # your posts.
  #
  config.disqus_shortname = 'suhankoh'

  # Put GOOGLE ANALYTICS ID here, if you want to use Google Analytics
  #
  # config.google_analytics_id = 'GOOGLE_ID'

  # Uncomment and edit if you want to have icon links to github or twitter
  #
  config.github_username  = 'suhankoh'
  config.twitter_username = 'suhankoh'
end
