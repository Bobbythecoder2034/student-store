// const express = require('express')
// const router = express.Router()

// const {requireAuth} = require('../middleware/authMiddleware')
// const {
//     getAllCourses, 
//     getCourseById,
//     createCourse,
//     updateCourse,
//     deleteCourse
// } = require('../controllers/courseController')
// /**
//  * We are going to apply the requireAuth to all course routes:
//  * --> Every request must include a valuable JWT (JSON Web Token) token
//  */
// router.use(requireAuth)

// router.get('/', getAllCourses)
// router.get('/:id',getCourseById)
// router.post('/', createCourse)
// router.put('/:id',updateCourse)
// router.delete('/:id',deleteCourse)

// module.exports = router;