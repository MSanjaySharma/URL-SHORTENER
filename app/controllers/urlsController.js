const Url = require("../models/url");

module.exports.list = (req, res) => {
  Url.find()
    .then((urls) => {
      res.json(urls);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Url.findById(id)
    .then((url) => {
      if (url) {
        res.json(url);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const url = new Url(body);
  url
    .save()
    .then((url) => {
      res.json(url);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Url.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((url) => {
      res.json(url);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destory = (req, res) => {
  const id = req.params.id;
  Url.findByIdAndDelete(id)
    .then((url) => {
      res.json(url);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.redirect = (req, res) => {
  const hash = req.params.hash;
  const userAgent = req.useragent;

  const clicksNew = {
    clickDateTime: new Date(),
    ipAddress: Object.keys(userAgent.geoIp).length
      ? ""
      : "Couldn't find the Ip",
    browser: userAgent.browser,
    platform: userAgent.platform,
    device: userAgent.isDesktop && !userAgent.isMobile ? "desktop" : "mobile",
  };
  Url.findOne({ hashedUrl: hash })
    .then((url) => {
      const condition = { _id: url.id };
      const update = { $push: { clicks: clicksNew } };

      Url.updateOne(condition, update)
        .then(() => {
          console.log("Push Succesful");
        })
        .catch((error) => {
          console.log(error);
        });
      res.redirect(url.originalUrl);
    })
    .catch((error) => {
      console.log(error);
    });
};
