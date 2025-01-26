import React from 'react'
import { draftMode } from 'next/headers'

export default async function Page() {
  const { isEnabled, previewData } = await draftMode()

  return (
    <>
      <h1>Draft Mode in Edge</h1>
      <p>
        Random: <em id="rand">{Math.random()}</em>
      </p>
      <p>
        State: <strong id="mode">{isEnabled ? 'ENABLED' : 'DISABLED'}</strong>
      </p>
      <p>
        Context: <strong id="context">{isEnabled ? previewData : 'N/A'}</strong>
      </p>
    </>
  )
}
