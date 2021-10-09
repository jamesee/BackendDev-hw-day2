module.exports = (db, UserDetails, ApiError) => {
  const controllers = {};

  controllers.insertUserDetails = async (req, res, next) => {
    const { uid, username } = req;
    const { company, designation, department } = req.body

    const newUserDetails = new UserDetails({user_id:uid,company, designation, department});


    try {
      let resUserDetails= {}
      const userDetails = await db.findUserDetailsByUserId(uid);

      if (userDetails) {
        resUserDetails = await db.updateUserDetails(userDetails.id, newUserDetails)
      } else {
        resUserDetails = await db.insertUserDetails(newUserDetails);
      }
      return res.status(201).json(resUserDetails);
    } catch (error) {
      next(ApiError.internalServerError({ error: `Database error` }));
    }
  };

  controllers.getUserDetails = async (req, res, next) => {
    const { uid } = req;
    // const id = Number(req.params.id);

    try {
      const userDetails = await db.findUserDetailsByUserId(uid);
      if (userDetails){
        return res.status(200).json(userDetails);
      } else {
        next(ApiError.notFound(`User_id ${id} details not found.`))
      }
    } catch (error) {
      next(ApiError.internalServerError({ error: `Database error` }));
    }
  };

  return controllers;
};
