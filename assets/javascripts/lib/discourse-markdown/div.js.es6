export function setup(helper) {
    helper.registerOptions((opts, siteSettings)=>{
      opts.features['dropcaps'] = true; //!!siteSettings.dropcaps_enabled;
    });
  
    helper.allowList(["div[style]"]);
    helper.allowList(["table[style]"]);
    helper.allowList(["hr[style]"]);
    helper.allowList(["span[style]"]);	
    helper.allowList(["font[color]"]); 
  }
