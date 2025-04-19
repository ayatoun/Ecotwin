import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [wakeUpTime, setWakeUpTime] = useState('07:00')
  const [householdSize, setHouseholdSize] = useState(1)
  const [heatingUsage, setHeatingUsage] = useState('medium')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Inscription
    const { user, error } = await supabase.auth.signUp({
      email,
      password
    })
    
    if (error) {
      alert(error.message)
      return
    }
    
    // Création du profil
    const { data, error: profileError } = await supabase
      .from('profiles')
      .insert([
        { 
          user_id: user.id,
          wake_up_time: wakeUpTime,
          household_size: householdSize,
          heating_usage: heatingUsage
        }
      ])
    
    if (profileError) {
      alert(profileError.message)
      return
    }
    
    router.push('/dashboard')
  }

  return (
    <div>
      <h1>Créer votre EcoTwin</h1>
      <form onSubmit={handleSubmit}>
        {/* Champs d'inscription et formulaire de profil */}
      </form>
    </div>
  )
}
