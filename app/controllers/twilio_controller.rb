class TwilioController < ApplicationController
  def handle_text_message
    account_sid = 'AC94661264ca6b7c2b8863af9b73402422'
    auth_token = 'cb075b0eb5635855815bcbee9a11cd75'
    @twilio_client = Twilio::REST::Client.new account_sid, auth_token
    sender = params[:From]
    body = 
    twiml = Twilio::TwiML::Response.new do |r|
      r.Message body
    end
    twiml.text
end