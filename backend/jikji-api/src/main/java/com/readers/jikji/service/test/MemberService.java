package com.readers.jikji.service.test;

import com.readers.jikji.domain.test.Member;
import com.readers.jikji.repository.test.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    @Transactional
    public String save(Member member){
        memberRepository.save(member);
        return "완료";
    }

    public Member findOne(long id){
        return memberRepository.findOne(id);
    }

    public List<Member> memberList(){
        return memberRepository.memberList();
    }
}

