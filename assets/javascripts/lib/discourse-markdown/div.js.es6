export function setup(helper) {
    helper.registerOptions((opts, siteSettings)=>{
      opts.features['html-whitelist'] = true; //!!siteSettings.html-whitelist_enabled;
    });
  
    helper.allowList(["div[style]"]);
    helper.allowList(["span[style]"]);
    
    helper.allowList(["table[style]"]);
    helper.allowList(["tr[style]"]);
    helper.allowList(["th[style]"]);
    helper.allowList(["th[colspan]"]);
    helper.allowList(["td[style]"]);
    helper.allowList(["td[colspan]"]);
    
    helper.allowList(["hr[style]"]);
    helper.allowList(["img[style]"]);
    helper.allowList(["a[style]"]);
    
    helper.allowList({
        custom(tag, name, value) {
            if (name === "class") { return !!tag.match(/[\S]*/); }
        },
    });
}
