import React from 'react'
import Badge from 'react-bootstrap/cjs/Badge'
import Button from 'react-bootstrap/cjs/Button'

export const Home = (props: { num: number; incNum: any }) => {
  console.log(props)
  console.log(JSON.stringify(props))
  const num = props.num
  const incNum = props.incNum
  return (
    <>
      <h2>
        Example heading <Badge variant="secondary">{num}</Badge>
      </h2>
      <Button onClick={incNum} variant="secondary">
        Increase
      </Button>{' '}
    </>
  )
}
