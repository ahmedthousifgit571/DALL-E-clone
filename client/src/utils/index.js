import {surpriseMePrompts} from '../constants'

// this function helps to get random prompts
export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random()*
    surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]
  
    // this part: no repetition of prompts
    if(randomPrompt===prompt) return getRandomPrompt(prompt)

    return randomPrompt
}