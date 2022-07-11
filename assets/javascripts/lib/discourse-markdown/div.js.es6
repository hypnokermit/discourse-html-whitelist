export function setup(helper) {
    helper.registerOptions((opts, siteSettings)=>{
      opts.features['html-whitelist'] = true; //!!siteSettings.html-whitelist_enabled;
    });
  
    helper.allowList(["div[style]"]);
    helper.allowList(["div[class]"]);
    helper.allowList(["table[style]"]);
    helper.allowList(["table[class]"]);
    helper.allowList(["tr[style]"]);
    helper.allowList(["tr[class]"]);
    helper.allowList(["th[style]"]);
    helper.allowList(["th[class]"]);
    helper.allowList(["th[colspan]"]);
    helper.allowList(["td[style]"]);
    helper.allowList(["td[class]"]);
    helper.allowList(["td[colspan]"]);
    helper.allowList(["hr[style]"]);
    helper.allowList(["hr[class]"]);
    helper.allowList(["span[style]"]);
    helper.allowList(["span[class]"]);
    helper.allowList(["img[style]"]);
    helper.allowList(["img[class]"]);
    helper.allowList(["a[style]"]);
    helper.allowList(["dl[class]"]);
    
    helper.allowList({
        custom(tag, name, value) {
            if (name === "class") {
                return !!tag.match(/[\S]*/);
            }
        },
    });
  }
