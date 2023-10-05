import React from 'react'
import { Button, Checkbox, Label, TextInput,Textarea } from 'flowbite-react';


const Form = () => {
  return (
    <>
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="name"
            value="Your name"
          />
        </div>
        <TextInput
          id="name"
          placeholder="John Doe"
          required
          type="name"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Your email"
          />
        </div>
        <TextInput
          id="email1"
          placeholder="name@gmail.com"
          required
          type="email"
        />
      </div>
      <div
      className="max-w-md"
      id="textarea"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="comment"
          value="Your message"
        />
      </div>
      <Textarea
        id="comment"
        placeholder="Type your message here..."
        required
        rows={4}
      />
    </div>
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">
          I accept the <a href='#'>Terms</a>
        </Label>
      </div>
      <Button color="purple" className='w-20'>
        Submit
      </Button>
    </form>
    </>
  )
}

export default Form