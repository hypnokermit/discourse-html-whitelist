export function setup(helper) {
    helper.registerOptions((opts, siteSettings)=>{
      opts.features['dropcaps'] = true; //!!siteSettings.dropcaps_enabled;
    });
  
    helper.allowList(["div[class]"]);
    helper.allowList(["div[style]"]);
    helper.allowList(["span[class]"]);
    helper.allowList(["span[style]"]);
    helper.allowList(["font[color]"]);


    console.log(
        "Automation Custom Tags Plugin"
      );    
  }
