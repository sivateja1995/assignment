const express = require("express");
const router = express.Router();
const states = require("../schemas/states");

/**
 * Method: post
 * saving of the states data
 */

router.post("/states", async (req, res, next) => {
  try {
    console.log(req.body);
    const state = new states(req.body);
    await state.save();
    res.status(201).json({ success: true, data: state });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err });
  }
});

/**
 * METHOD: get
 * fetching of the details. 
 */
router.get("/states", async (req, res, next) => {
  try {
    let code = req.params.code || {};
    const result = await states.find(code, { state: 1, code: 1 });
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.log(err)
    res.status(500).json({error:err});
  }
});

module.exports = router;
