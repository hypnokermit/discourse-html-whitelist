export function setup(helper) {
    helper.registerOptions((opts, siteSettings)=>{
      opts.features['htmlwhitelist'] = !!siteSettings.htmlwhitelist_enabled;
    });
  
    helper.allowList(["div[style]"]);
    helper.allowList(["span[style]"]);
    helper.allowList(["img[style]"]);
    helper.allowList(["a[style]"]);
    helper.allowList(["hr[style]"]);
    
    helper.allowList(["table[style]"]);
    helper.allowList(["tr[style]"]);
    helper.allowList(["th[style]"]);
    helper.allowList(["th[colspan]"]);
    helper.allowList(["td[style]"]);
    helper.allowList(["td[colspan]"]);

    if (true === !!this.siteSettings.htmlwhitelist_allowclasses) {
        helper.allowList({
            custom(tag, name, value) {
                if (name === "class") { return !!tag.match(/[\S]*/); }
            },
        });
    }
}
