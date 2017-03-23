const fs = require('fs')
const path = require('path')

const encode = data => (new Buffer(data)).toString('base64')

const decode = data => (new Buffer(`${data}`, 'base64')).toString()

const encodeName = name => encode('@' + name)

const loadDb = (dbFile, cb) => {
  fs.readFile(dbFile, (err, res) => {
    if (err) { return cb(err) }

    let messages
    try {
      messages = JSON.parse(res)
    } catch (e) {
      return cb(err)
    }

    return cb(null, { file: dbFile, messages: messages })
  })
}

const findInbox = (db, encodedName) => {
  var messages = db.messages
  return {
    dir: path.dirname(db.file),
    messages: Object.keys(messages).reduce((acc, key) => {
      if (messages[key].to === encodedName) {
        return acc.concat({
          hash: key,
          lastHash: messages[key].last,
          from: messages[key].from
        })
      } else { return acc }
    }, [])
  }
}

const findNextMessage = (inbox, lastHash) => {
  var found
  for (var i = 0; i < inbox.messages.length; i++) {
    if (inbox.messages[i].lastHash === lastHash) {
      found = i
      break
    }
  }
  let keyword = fs.readFileSync(path.join(inbox.dir, inbox.messages[found].hash), 'utf8')
  return `from: ${decode(inbox.messages[found].from)}\n---\n${decode(keyword)}`
}

module.exports = {
  findNextMessage,
  findInbox,
  loadDb,
  encodeName,
  decode
}
