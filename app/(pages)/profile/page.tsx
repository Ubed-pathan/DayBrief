// // pages/profile.tsx

// import { getSession } from "next-auth/react"

// export async function getServerSideProps(context) {
//   const session = await getSession(context)

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: { session },
//   }
// }

// export default function ProfilePage({ session }) {
//   return (
//     <div>
//       <h1>Profile Page</h1>
//       <p>Email: {session.user.email}</p>
//       {session.user.username && <p>Username: {session.user.username}</p>}
//     </div>
//   )
// }



