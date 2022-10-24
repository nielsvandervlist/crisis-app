import {useEffect, useState} from 'react'
import {Fetcher, useApi, useIndex} from 'ra-fetch'
import {useAuth} from '@/hooks/auth'

function TimelineForm({startTime, endTime, setStartTime, setEndTime, title, setTitle, setTimeline}) {

    const {user} = useAuth({middleware: 'auth'})
    const [company, setCompany] = useState()
    const [response, setResponse] = useState()
    const [errors, setErrors] = useState()
    const [crises, setCrises] = useState()
    const [crisis, setCrisis] = useState()

    const companies = useApi('backend').index('companies')

    function submit(e) {
        e.preventDefault()
        Fetcher.api('backend').store('timelines', {
            title: title,
            start_time: startTime,
            end_time: endTime,
            company_id: company,
            crisis_id: crisis,
            user_id: user.id,
        })
            .then(response => setTimeline(response))
            .catch(errors => setErrors(errors))
    }

    useEffect(() => {
        if(user?.id){
            Fetcher.api('backend').index('crises').then(res => setCrises(res)).catch(err => console.log(err))
        }

    }, [user?.id])

    return <form className={'card col-span-12 form'}>
        <fieldset>
            <div className={'form__block'}>
                <label>Title</label>
                <input
                    type={'text'}
                    value={title}
                    placeholder={'Title'}
                    onChange={event => setTitle(event.target.value)}
                    id={'title'}
                    name={'title'}
                />
            </div>
            <div className={'form__block'}>
                <label>Start time</label>
                <input
                    type={'datetime-local'}
                    value={startTime}
                    onChange={event => setStartTime(event.target.value)}
                    id={'startTime'}
                    name={'startTime'}
                />
            </div>
            <div className={'form__block'}>
                <label>End time</label>
                <input
                    type={'datetime-local'}
                    value={endTime}
                    onChange={event => setEndTime(event.target.value)}
                    id={'endTime'}
                    name={'endTime'}
                />
            </div>
            <div className={'form__block'}>
                <label>Company</label>
                <select
                    value={company}
                    onChange={event => setCompany(event.target.value)}
                >
                    <option>Select a option</option>
                    {
                        companies[0].data.map((company, index) => {
                            return <option key={index} value={company.id}>{company.name}</option>
                        })
                    }
                </select>
            </div>
            {
                crises && !crises.loading && crises.data.length > 0 &&
                <div className={'form__block'}>
                    <label>Crisis</label>
                    <select
                        value={crisis}
                        onChange={event => setCrisis(event.target.value)}
                    >
                        <option>Select a option</option>
                        {
                            crises.data.map((crisis, index) => {
                                return <option key={index} value={crisis.id}>{crisis.title}</option>
                            })
                        }
                    </select>
                </div>
            }
        </fieldset>
        <div className={'flex items-center'}>
            {response && <div className={'btn btn--success'}>Timeline created</div>}
            {errors && <div className={'btn btn--error'}>{errors.errors[0]}</div>}
            <button className={'btn btn--primary ml-auto mt-4'} onClick={(e) => submit(e)}>Submit</button>
        </div>
    </form>
}

export default TimelineForm
