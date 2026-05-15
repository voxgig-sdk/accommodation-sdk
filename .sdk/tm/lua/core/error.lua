-- Accommodation SDK error

local AccommodationError = {}
AccommodationError.__index = AccommodationError


function AccommodationError.new(code, msg, ctx)
  local self = setmetatable({}, AccommodationError)
  self.is_sdk_error = true
  self.sdk = "Accommodation"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function AccommodationError:error()
  return self.msg
end


function AccommodationError:__tostring()
  return self.msg
end


return AccommodationError
