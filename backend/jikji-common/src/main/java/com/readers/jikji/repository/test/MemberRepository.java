package com.readers.jikji.repository.test;

import com.readers.jikji.domain.test.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class MemberRepository {
    private final EntityManager em;

    public void save(Member member){
        em.persist(member);
    }

    public Member findOne(long id){
        return em.find(Member.class, id);
    }

    public List<Member> memberList(){
        return em.createQuery("select m from Member m", Member.class ).getResultList();
    }
}
