import AccountForm from './account-form'
import { supabaseServer } from '../../../utils/supabase/server'

export default async function Account() {
  const supabase = supabaseServer()

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
