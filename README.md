# Inject Javascript
Safari Extension

Hi, so, you want to Inject Javascript to a website?
Great.

Since this is a very basic (demo) project it has not that many options.

### How to install?
- Build this project.
- Run on your device.
- Enable extension in Safari (iOS 15+).
- Enable full access.

### How to use?
- Open "InjectJS" Settings
- Fill in the javascript field (press *DONE* on keyboard, otherwise it will _not_ save)
- Reload the page

### Examples
To make a script to only run on a pre-defined domain, use the function `domain("domainname.ext", function)` (Warning, `"domainname.ext"` will be converted to a regular expression using `new RegExp("domainname.ext")`).

For the rest, there are no (known) limitations.

Run on "Domain.com"
```JavaScript
domain("domain.com", function() {
     // .. run this
})
```

Run on "WDGWV.com" and "WDGWV.nl".
```JavaScript
domain("wdgwv.(com|nl)", function() {
    alert('Hi There!')
})
```

### Future goals
- <a href='https://github.com/wdg/InjectJS/issues/1' target='_blank'>Built-in Javascript validator, if there's a fault in your code, it will not execute, and does not throw a error.</a>
- <a href='https://github.com/wdg/InjectJS/issues/2' target='_blank'>Add a in-extension settings for managing different websites, now you'll need to use `domain(...)` for specific domains.</a>

### Extra
Thanks for using, feel free to create issues, pull requests, any help is appreciated.

### Help/FAQ

<details>
  <summary>My script isn't running</summary>
  <p>
  <ul>
    <li> Does the extension has the correct permissions?
    <li> Is your script working outside of the extension? if so <a href='https://github.com/wdg/InjectJS/issues/new'>Please create a issue</a>
  </ul>
  </p>
</details>

### Thanks to:

[TwoFactorHelper](https://github.com/Savjee/TwoFactorHelper)
[Amplosion](https://github.com/christianselig/Amplosion)

## Contact

🦋 [@0xWDG](https://bsky.app/profile/0xWDG.bsky.social)
🐘 [mastodon.social/@0xWDG](https://mastodon.social/@0xWDG)
🐦 [@0xWDG](https://x.com/0xWDG)
🧵 [@0xWDG](https://www.threads.net/@0xWDG)
🌐 [wesleydegroot.nl](https://wesleydegroot.nl)
🤖 [Discord](https://discordapp.com/users/918438083861573692)
