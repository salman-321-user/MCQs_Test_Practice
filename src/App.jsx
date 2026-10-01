import { useState } from 'react'
import questions, { testTitle } from './questions'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export default function App() {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [showErrors, setShowErrors] = useState(false)

  const total = questions.length
  const answeredCount = Object.keys(answers).length
  const unanswered = questions.map((_, i) => i).filter((i) => answers[i] === undefined)
  const score = questions.filter((q, i) => answers[i] === q.answer).length

  const selectOption = (qIndex, option) => {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [qIndex]: option }))
  }

  const scrollToQuestion = (i) => {
    document.getElementById(`q-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const handleSubmit = () => {
    if (unanswered.length > 0) {
      setShowErrors(true)
      scrollToQuestion(unanswered[0])
      return
    }
    if (!window.confirm('Are you sure you want to submit the test?')) return
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleRetake = () => {
    setAnswers({})
    setSubmitted(false)
    setShowErrors(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header
        title={testTitle}
        answered={answeredCount}
        total={total}
        submitted={submitted}
        score={score}
      />

      <main className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
        {submitted && <ResultCard score={score} total={total} onRetake={handleRetake} />}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          {/* Questions */}
          <div className="flex-1 space-y-4">
            {questions.map((q, i) => (
              <QuestionCard
                key={i}
                index={i}
                q={q}
                selected={answers[i]}
                submitted={submitted}
                missing={showErrors && answers[i] === undefined}
                onSelect={selectOption}
              />
            ))}

            {!submitted ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                {showErrors && unanswered.length > 0 && (
                  <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    Please answer all questions before submitting. {unanswered.length} question
                    {unanswered.length > 1 ? 's are' : ' is'} still unanswered.
                  </p>
                )}
                <button
                  onClick={handleSubmit}
                  className="w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 active:scale-[0.99]"
                >
                  Submit Test ({answeredCount}/{total} answered)
                </button>
              </div>
            ) : (
              <button
                onClick={handleRetake}
                className="w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
              >
                Retake Test
              </button>
            )}
          </div>

          {/* Question navigator */}
          <aside className="order-first lg:order-none lg:sticky lg:top-24 lg:w-72">
            <Navigator
              answers={answers}
              submitted={submitted}
              showErrors={showErrors}
              onJump={scrollToQuestion}
            />
          </aside>
        </div>
      </main>

      <footer className="py-8 text-center text-xs text-slate-400">
        {testTitle} &middot; {total} Questions
      </footer>
    </div>
  )
}

function Header({ title, answered, total, submitted, score }) {
  const progress = Math.round((answered / total) * 100)
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
            Q
          </div>
          <div>
            <h1 className="text-base font-bold leading-tight sm:text-lg">{title}</h1>
            <p className="text-xs text-slate-500">{total} multiple choice questions</p>
          </div>
        </div>
        <div className="text-right">
          {submitted ? (
            <p className="text-sm font-semibold text-indigo-600">
              Score: {score}/{total}
            </p>
          ) : (
            <p className="text-sm font-semibold text-slate-700">
              {answered}/{total}
              <span className="hidden font-normal text-slate-500 sm:inline"> answered</span>
            </p>
          )}
        </div>
      </div>
      <div className="h-1 w-full bg-slate-100">
        <div
          className="h-1 bg-indigo-600 transition-all duration-300"
          style={{ width: `${submitted ? 100 : progress}%` }}
        />
      </div>
    </header>
  )
}

function QuestionCard({ index, q, selected, submitted, missing, onSelect }) {
  const isCorrect = selected === q.answer

  let border = 'border-slate-200'
  if (submitted) border = isCorrect ? 'border-emerald-300' : 'border-red-300'
  else if (missing) border = 'border-red-400 ring-2 ring-red-100'

  return (
    <div id={`q-${index}`} className={`rounded-2xl border bg-white p-5 shadow-sm sm:p-6 ${border}`}>
      <div className="mb-4 flex items-start justify-between gap-3">
        <h2 className="text-base font-semibold leading-relaxed sm:text-lg">
          <span className="mr-2 text-indigo-600">Q{index + 1}.</span>
          {q.question}
        </h2>
        {submitted && (
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
              isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {isCorrect ? 'Correct' : 'Wrong'}
          </span>
        )}
        {!submitted && missing && (
          <span className="shrink-0 rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700">
            Required
          </span>
        )}
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {q.options.map((option, oi) => {
          const isSelected = selected === option
          const isAnswer = option === q.answer

          let style = 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50'
          let badge = 'bg-slate-100 text-slate-600'
          if (!submitted && isSelected) {
            style = 'border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500'
            badge = 'bg-indigo-600 text-white'
          }
          if (submitted) {
            style = 'border-slate-200 opacity-70'
            if (isAnswer) {
              style = 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500'
              badge = 'bg-emerald-600 text-white'
            } else if (isSelected) {
              style = 'border-red-500 bg-red-50 ring-1 ring-red-500'
              badge = 'bg-red-600 text-white'
            }
          }

          return (
            <button
              key={oi}
              type="button"
              disabled={submitted}
              onClick={() => onSelect(index, option)}
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition sm:text-base ${style} ${
                submitted ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${badge}`}
              >
                {LETTERS[oi]}
              </span>
              <span className="flex-1">{option}</span>
              {submitted && isAnswer && <span className="text-emerald-600">✓</span>}
              {submitted && isSelected && !isAnswer && <span className="text-red-600">✗</span>}
            </button>
          )
        })}
      </div>

      {submitted && !isCorrect && (
        <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-2.5 text-sm text-emerald-800">
          <span className="font-semibold">Correct answer:</span> {q.answer}
        </p>
      )}
    </div>
  )
}

function Navigator({ answers, submitted, showErrors, onJump }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-sm font-semibold text-slate-700">Questions</h3>
      <div className="grid grid-cols-10 gap-1.5 lg:grid-cols-6">
        {questions.map((q, i) => {
          const answered = answers[i] !== undefined
          let style = 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          if (submitted) {
            style = answers[i] === q.answer ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
          } else if (answered) {
            style = 'bg-indigo-600 text-white'
          } else if (showErrors) {
            style = 'bg-red-100 text-red-700 ring-1 ring-red-300'
          }
          return (
            <button
              key={i}
              onClick={() => onJump(i)}
              className={`aspect-square rounded-md text-[11px] font-semibold transition sm:text-xs ${style}`}
            >
              {i + 1}
            </button>
          )
        })}
      </div>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-500">
        {submitted ? (
          <>
            <Legend color="bg-emerald-500" label="Correct" />
            <Legend color="bg-red-500" label="Wrong" />
          </>
        ) : (
          <>
            <Legend color="bg-indigo-600" label="Answered" />
            <Legend color="bg-slate-200" label="Not answered" />
          </>
        )}
      </div>
    </div>
  )
}

function Legend({ color, label }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`h-3 w-3 rounded ${color}`} />
      {label}
    </span>
  )
}

function ResultCard({ score, total, onRetake }) {
  const percent = Math.round((score / total) * 100)
  const passed = percent >= 50

  let message = 'Keep practising, you can do better!'
  if (percent >= 80) message = 'Excellent work! Outstanding performance.'
  else if (percent >= 50) message = 'Good job! You passed the test.'

  return (
    <div className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-lg sm:p-8">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium uppercase tracking-wider text-indigo-100">Your Result</p>
          <h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">
            {score} / {total}
          </h2>
          <p className="mt-2 text-indigo-100">{message}</p>
          <span
            className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-bold ${
              passed ? 'bg-emerald-400/90 text-emerald-950' : 'bg-red-400/90 text-red-950'
            }`}
          >
            {passed ? 'PASSED' : 'FAILED'}
          </span>
        </div>

        <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white/10">
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${percent} 100`}
            />
          </svg>
          <span className="text-2xl font-bold">{percent}%</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        <Stat label="Correct" value={score} />
        <Stat label="Wrong" value={total - score} />
        <Stat label="Total" value={total} />
      </div>

      <p className="mt-6 text-center text-sm text-indigo-100">
        Scroll down to review all questions with their correct answers.{' '}
        <button onClick={onRetake} className="font-semibold text-white underline underline-offset-2">
          Retake test
        </button>
      </p>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/10 px-3 py-3">
      <p className="text-xl font-bold sm:text-2xl">{value}</p>
      <p className="text-xs text-indigo-100">{label}</p>
    </div>
  )
}
