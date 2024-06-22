import AccountForm from './account-form'
import { createClient } from '../../../utils/supabase/server'

export default async function Account() {
  const supabase = createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    console.error('Error fetching user:', error)
    return <div>Error fetching user data</div>
  }

  return <AccountForm user={user} />
}
