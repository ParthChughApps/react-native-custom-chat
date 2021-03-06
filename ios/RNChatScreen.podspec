
Pod::Spec.new do |s|
  s.name         = "RNChatScreen"
  s.version      = "1.0.0"
  s.summary      = "RNChatScreen"
  s.description  = <<-DESC
                  RNChatScreen
                   DESC
  s.homepage     = "https://github.com/ParthChughApps/react-native-custom-chat"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/ParthChughApps/react-native-custom-chat.git", :tag => "master" }
  s.source_files  = "RNChatScreen/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  