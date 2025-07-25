
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/polyfills-legacy.ICncSPAx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/app-legacy.C1tAX-km.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/page-OnePage-legacy.CAJ9Ylbn.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/DeliveryMethodSelectorSection-legacy.BvEcoBSC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useEditorShopPayNavigation-legacy.DTJGglnd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/ShopPayLogo-legacy.BZSdQ6Zd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/VaultedPayment-legacy.DPDIWAY3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/LocalizationExtensionField-legacy.8vtHLPao.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/ShopPayOptInDisclaimer-legacy.D2Fwe0t2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/ShipmentBreakdown-legacy.v_Ue2C1n.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/MerchandiseModal-legacy.OP-C5lkC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/StackedMerchandisePreview-legacy.Cx0QVZCC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/PayButtonSection-legacy.D56J2L0h.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/component-ShopPayVerificationSwitch-legacy.DzEkNv4c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useSubscribeMessenger-legacy.CG1XnmXr.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/index-legacy.Djm_Miil.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  