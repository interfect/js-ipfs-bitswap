'use strict'

module.exports = `
package bitswap.message.pb;

message Message {

  message Wantlist {

    message Entry {
      optional bytes block = 1; // the block key
      optional int32 priority = 2; // the priority (normalized). default to 1
      optional bool cancel = 3;  // whether this revokes an entry
    }

    repeated Entry entries = 1; // a list of wantlist entries
    optional bool full = 2;     // whether this is the full wantlist. default to false
  }

  optional Wantlist wantlist = 1;
  repeated bytes blocks = 2;
}
`
